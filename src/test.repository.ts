import { Injectable } from "@nestjs/common";

export class TestRepository {
  getNumberInDb(): number {
    const dataInDb = 1;
    return dataInDb;
  }
}
