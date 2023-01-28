// @ts-ignore
function emit(str) {}
abstract class BaseModel {
  _tablename: string;

  constructor(tablename: string) {
    this._tablename = tablename;
  }
  abstract removeRecord()

  abstract updateRecord()

  abstract fromObject()
}

export class Room extends BaseModel {
  room__id: number;
  name: string;
  description: string;
  capacity: number;
  isAvailable: boolean;

  constructor(room__id: number, name: string, description: string, capacity: number, isAvailable: boolean) {
    super('rooms');
    this.room__id = room__id;
    this.name = name;
    this.capacity = capacity;
    this.isAvailable = isAvailable;
  }

  removeRecord() {
    emit('removeRecord');
  }

  updateRecord() {
    emit('updateRecord');
  }

  fromObject() {
    emit('fromObject');
  }
}

export class Person extends BaseModel {
  person_id: number;
  name: string;
  email: string;
  phone: string;
  address: string;

  constructor(person_id: number, name: string, email: string, phone: string, address: string) {
    super('people');
    this.person_id = person_id;
    this.name = name;
    this.email = email;
    this.phone = phone;
    this.address = address;
  }

  removeRecord() {
    emit('removeRecord');
  }

  updateRecord() {
    emit('updateRecord');
  }

  fromObject() {
    emit('fromObject');
  }
}

export class Room_availability extends BaseModel {
  reservation_id: number;
  room_id: number;
  person_id: number;
  checkin: Date;
  checkout: Date;

  constructor(reservation_id: number, room_id: number, person_id: number, checkin: Date, checkout: Date) {
    super('reservations');
    this.reservation_id = reservation_id;
    this.room_id = room_id;
    this.person_id = person_id;
    this.checkin = checkin;
    this.checkout = checkout;
  }

  removeRecord() {
    emit('removeRecord');
  }

  updateRecord() {
    emit('updateRecord');
  }

  fromObject() {
    emit('fromObject');
  }
}

export class Payment extends BaseModel {
  transaction_id: number;
  reservation_id: number;
  amount: number;
  date: Date;

  constructor(transaction_id: number, reservation_id: number, amount: number, date: Date) {
    super('transactions');
    this.transaction_id = transaction_id;
    this.reservation_id = reservation_id;
    this.amount = amount;
    this.date = date;
  }

  removeRecord() {
    emit('removeRecord');
  }

  updateRecord() {
    emit('updateRecord');
  }

  fromObject() {
    emit('fromObject');
  }
}

export class Employee extends BaseModel {
  employee_id: number;
  name: string;
  email: string;
  phone: string;
  address: string;
  position: string;

  constructor(employee_id: number, name: string, email: string, phone: string, address: string, position: string) {
    super('employees');
    this.employee_id = employee_id;
    this.name = name;
    this.email = email;
    this.phone = phone;
    this.address = address;
    this.position = position;
  }

  removeRecord() {
    emit('removeRecord');
  }

  updateRecord() {
    emit('updateRecord');
  }

  fromObject() {
    emit('fromObject');
  }
}

class Transaction {
  transaction_id: number;
  reservation_id: number;
  amount: number;
  date: Date;

  constructor(transaction_id: number, reservation_id: number, amount: number, date: Date) {
    this.transaction_id = transaction_id;
    this.reservation_id = reservation_id;
    this.amount = amount;
    this.date = date;
  }

  removeRecord() {
    emit('removeRecord');
  }

  updateRecord() {
    emit('updateRecord');
  }
}
