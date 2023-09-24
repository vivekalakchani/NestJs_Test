import { Module } from '@nestjs/common';
import { TasksController } from './tasks.controller';
import { TasksService } from './tasks.service';
import { TaskRepository } from './task.repository';
@Module({
  imports: [],
  controllers: [TasksController],
  providers: [TasksService, TaskRepository],
})
export class TasksModule {}
