abstract class Database {
  void saveData(String data);
}

class MySQLDatabase implements Database {
  @override
  void saveData(String data) => print("ذخیره در MySQL...");
}

class UserService {
  final Database database;

  UserService(this.database);

  void saveUser(String user) {
    database.saveData(user);
  }
}