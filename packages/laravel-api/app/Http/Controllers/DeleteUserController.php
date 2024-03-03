<?php

namespace App\Http\Controllers;

use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Auth;

class DeleteUserController extends Controller
{
    public function destroy(User $user): JsonResponse
    {
        //Vérification si l'utilisateur est authentifié
        if(Auth::id() !== $user->id){
            return response()->json(['message' => 'Action non autorisée'],401);
        }
        //Delete user et le déconnecter
        $user->delete();
        Auth::logout();

        return response()->json(['message' => 'Votre compte a été supprimé avec succès']);
    }
}
