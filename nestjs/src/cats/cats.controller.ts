import {
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Put,
  UseInterceptors,
} from '@nestjs/common';
import { SuccessInterceptor } from 'src/common/interceptors/success.interceptor';
import { PositiveIntPipe } from 'src/common/pipes/positiveInt.pipe';
import { CatsService } from './cats.service';

@Controller('cats')
@UseInterceptors(SuccessInterceptor)
export class CatsController {
  constructor(private readonly catsService: CatsService) {}

  @Get()
  readAllCat() {
    return 'read all cat';
  }

  @Get('/:id')
  readCat(@Param('id', ParseIntPipe, PositiveIntPipe) param: number) {
    console.log(param);
    return 'read cat';
  }

  @Post()
  createCat() {
    return 'create cat';
  }

  @Put('/:id')
  updateCat() {
    return 'update cat';
  }

  @Patch('/:id')
  updatePartialCat() {
    return 'update partial cat';
  }

  @Delete('/:id')
  deleteCat() {
    return 'delete cat';
  }
}
