<?php

namespace App\Http\Controllers;

use App\Models\User;
use http\Env\Response;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Hash;

class UserController extends Controller
{
    public function update(User $user, Request $request)
    {
        //Vérifier si c'est bien l'utulisateur
        if(Auth::id() !== $user->id){
            return response()->json(['message' => 'action non autorisée'], 403);
        }

        //valider les données reçues
        $validator = Validator::make($request->all(), [
           'name' => 'required|string|max:255',
           'password'=>'sometimes|nullable|string|min:8|confirmed',
           'email' => 'required|string|email|max:255|unique:users,email'
        ]);

        if($validator->fails()){
            return response()->json(['message'=>$validator->errors()],422);
        }

        //MàJ des informations de l'utilisateur
        $user->name = $request->name;
        $user->email = $request->email;

        if($request->filled('password')){
            $user->password = Hash::make($request->password);
        }

        $user->save();

        return response()->json(['message' => 'mise à jour des données réussie'], );
    }
}
