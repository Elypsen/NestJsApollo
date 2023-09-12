import { ApolloDriverConfig, ApolloDriver } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { CatsResolver } from './cats/resolvers/cats.resolver';
import { CatsService } from './cats/cats.service';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      autoSchemaFile: true,
      driver: ApolloDriver,
      context: ({ req }) => {
        {
          req;
        }
      },
    }),
  ],
  providers: [CatsResolver, CatsService],
})
export class AppModule {}
