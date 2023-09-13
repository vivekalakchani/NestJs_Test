import { TaskStatus } from '../tasks.model';
import { IsIn, IsNotEmpty, IsOptional } from 'class-validator';

export class getTasksFilterDto {
  @IsOptional()
  @IsIn([TaskStatus.OPEN, TaskStatus.IN_PROGRESS, TaskStatus.OPEN])
  status: TaskStatus;

  @IsOptional()
  @IsNotEmpty()
  search: string;
}
