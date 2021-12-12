import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { LoggingUser } from './loggingUser';

export const LoginUser = createParamDecorator(
  (data: unknown, ctx: ExecutionContext) => {
    // const request = ctx.switchToHttp().getRequest();
    // return request.user;
    return new LoggingUser('');
  },
);