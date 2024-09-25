import { Injectable } from '@nestjs/common';
import { CreatePostDto } from './dto/create-post.dto';
import {Pool} from 'pg'
import { Post } from './entities/post.entity';

@Injectable()
export class PostsService {
  private pool: Pool;

  constructor(){
    this.pool = new Pool({
      host: 'localhost',
      port: 5432,
      user: 'postgres',
      password: 'l3v11234',
      database: 'forum_db'
    }
    );
  }

  async create(createPostDto: CreatePostDto): Promise<Post> { //Cria posts -> os insere no BD
    const bd = await this.pool.connect();
    try{
      const postCriado = await bd.query(`
        INSERT INTO posts (user_id, content, parent_post_id) 
        VALUES ($1, $2, $3)`, [createPostDto.user_id, createPostDto.content, createPostDto.parent_post_id]);
        return postCriado;
    }finally{
      bd.release();
    }
  }

  async getPosts(): Promise<Post[]> { //retorna todos os Posts do BD com pai específico
    const bd = await this.pool.connect();
    try{
      const resultado = await bd.query('SELECT * FROM posts ORDER BY date_published DESC');
      return resultado.rows;
    }finally{
      bd.release();
    }
  }

  async getChildren(Postid: number): Promise<Post[]> { //retorna todos os Posts do BD com pai específico
    const bd = await this.pool.connect();

    try{
      let resultado;
      if(Postid == null){
        resultado = await bd.query(
          `SELECT * FROM posts WHERE parent_post_id is NULL ORDER BY date_published DESC`, [Postid]);
      }
      else{
        resultado = await bd.query(
          `SELECT * FROM posts WHERE parent_post_id = $1 ORDER BY date_published DESC`, [Postid]);
      }
      return resultado.rows;
    }finally{
      bd.release();
    }
  }

  async removePosts(Postid: number): Promise<void> { //Remove posts da BD
    const bd = await this.pool.connect();
    try{
      const resultado = await bd.query(`DELETE FROM posts WHERE id = $1`, [Postid]);
    }finally{
      bd.release();
    }
  }
}

