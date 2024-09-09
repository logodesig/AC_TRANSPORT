import { Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
  private _vehicles: any;
  public get vehicles(): any {
    return this._vehicles;
  }
  public set vehicles(value: any) {
    this._vehicles = value;
  }
  private _mission: any;
  public get mission(): any {
    return this._mission;
  }
  public set mission(value: any) {
    this._mission = value;
  }
  async onModuleInit() {
    await this.$connect();
  }
}