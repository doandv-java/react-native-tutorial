<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ArticleController;
use  App\Http\Controllers\Auth\RegisterController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

//Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
//    return $request->user();
//});

Route::get('articles', [ArticleController::class, 'index']);

Route::get('articles/{article}', [ArticleController::class, 'show']);

Route::post('articles', [ArticleController::class, 'store']);

Route::put("articles/{article}", [ArticleController::class, 'update']);

Route::delete('articles/{article}', [ArticleController::class, 'delete']);

Route::post('login', [RegisterController::class, 'login']);
Route::post('logout', [RegisterController::class, 'logout']);
Route::post('register', [RegisterController::class, 'register']);

