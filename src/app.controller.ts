import { Body, Controller, Post } from '@nestjs/common';
import { CreateTeamMemberBody } from './dtos/create-team-member-body';
import { RocketMembersRepository } from './repositories/rocket-members-repository';

@Controller('app')
export class AppController {
constructor ( private rocketMemberRepository: RocketMembersRepository) {}

  @Post('hello')
  async getHello(@Body() body: CreateTeamMemberBody) {
   const {name, function: memberFunction } = body;

await this.rocketMemberRepository.create(name, memberFunction)
  }
}
