import { BadRequestException, Injectable, Logger } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { DatabaseService } from 'src/database/database.service';

@Injectable()
export class EmployeesService {

  private readonly logger = new Logger(EmployeesService.name)

  constructor(private readonly databaseService: DatabaseService) { }

  async create(createEmployeeDto: Prisma.EmployeesCreateInput) {
    //is empty 
    console.log(createEmployeeDto);
    if (!createEmployeeDto.name || !createEmployeeDto.email) {
      throw new BadRequestException("Name and email required!")
    }
    //is already exist in db
    //if exist so return error 
    //if not so crate employee
    return this.databaseService.employees.create({
      data: createEmployeeDto
    });
  }

  async findAll(role?: 'INTERN' | 'ADMIN') {
    // if (role) return this.databaseService.employees.findMany({
    //   where: {
    //     role,
    //   }
    // })
    return this.databaseService.employees.findMany();
  }

  async findOne(id: number) {
    return this.databaseService.employees.findUnique({
      where: {
        id,
      }
    });
  }

  async update(id: number, updateEmployeeDto: Prisma.EmployeesUpdateInput) {
    return this.databaseService.employees.update({
      where: {
        id,
      },
      data: updateEmployeeDto,
    });
  }

  async remove(id: number) {
    return this.databaseService.employees.delete({
      where: {
        id,
      }
    });
  }
}
