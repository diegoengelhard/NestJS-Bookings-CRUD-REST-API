import { Global, Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';

@Global() // Decorator makes the module global, it can be imported by other modules
@Module({
  providers: [PrismaService],
  exports: [PrismaService], // Export PrismaService to make it available to other modules
})
export class PrismaModule {}
