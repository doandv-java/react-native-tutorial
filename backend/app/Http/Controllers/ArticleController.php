<?php

namespace App\Http\Controllers;

use App\Models\Article;
use Illuminate\Http\Request;

class ArticleController extends Controller
{

    public function index()
    {
        return Article::all();
    }

    public function show($article)
    {
        return $article;
    }

    public function store(Request $request)
    {
        $article = Article::create($request->all());
        return response()->json($article, 201);
    }

    public function update(Request $request, Article $article)
    {
        $article->update($request->all());
        return response()->json($article);
    }

    public function delete($article)
    {
        $article->delete();
        return response()->json(null,204);
    }

}
