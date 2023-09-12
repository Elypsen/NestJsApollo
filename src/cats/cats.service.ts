import { Injectable } from '@nestjs/common';
import { Cat } from './cat.entity';
import { CreateCatInput } from './resolvers/cats.inputs';

@Injectable()
export class CatsService {
  private readonly cats: Cat[] = [];

  create(input: CreateCatInput): Cat {
    const cat = new Cat();
    cat.id = Math.random().toString(36).substring(2, 9);
    cat.name = input.name;
    cat.age = input.age;
    this.cats.push(cat);
    return cat;
  }

  findAll(): Cat[] {
    return this.cats;
  }
}
