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

  async create(createPostDto: CreatePostDto): Promise<Post> {
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

  async getPosts(): Promise<Post[]> {
    const bd = await this.pool.connect();
    try{
      const resultado = await bd.query('SELECT * FROM posts');
      return resultado.rows;
    }finally{
      bd.release();
    }
  }

  findOne(id: number) {
    return `This action returns a #${id} post`;
  }

  remove(id: number) {
    return `This action removes a #${id} post`;
  }
}
