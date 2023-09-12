import { Resolver, Query, Args, Mutation } from '@nestjs/graphql';
import { Cat } from '../cat.entity';
import { CatsService } from '../cats.service';
import { CreateCatInput } from './cats.inputs';

@Resolver('Query')
export class CatsResolver {
  constructor(private readonly catsService: CatsService) {}

  @Mutation(() => Cat)
  async createCat(@Args('input') input: CreateCatInput) {
    const cat = await this.catsService.create(input);
    return cat;
  }

  @Query(() => [Cat])
  async getCats() {
    return this.catsService.findAll();
  }
}
