import * as SQLite from 'expo-sqlite';


const db = SQLite.openDatabase('post.db')

export class DB {
    static init() {
        return new Promise((resolve, reject) => {
            db.transaction(tx => {
                tx.executeSql(
                    'CREATE TABLE IF NOT EXISTS posts (id INTEGER PRIMARY KEY NOT NULL, title TEXT NOT NULL,text TEXT NOT NULL, img TEXT, date TEXT, booked INT)',
                    [],
                    resolve,
                    (_, error) => reject()
                )
            })
        })
    }
    static getPost () {
        return new Promise((resolve, reject) => {
            db.transaction(tx => {
                tx.executeSql(
                    'SELECT * FROM posts',
                    [],
                    (_, result) => resolve(result.rows._array),
                    (_, error) => reject()
                )
            })
        })
    }
    static addPost ({title, text, img, booked, date}) {
        return new Promise((resolve, reject) => {
            db.transaction(tx => {
                tx.executeSql(
                    `INSERT INTO posts (title, text, img, booked, date) VALUES (?,?,?,?,?)`,
                    [title, text, img, 0, date],
                    (_, result) => resolve(result.insertId),
                    (_, error) => reject()

                )
            })
        })
    }
    static savePost (post) {
        return new Promise((resolve, reject) => {
            db.transaction(tx => {
                tx.executeSql(
                    'UPDATE posts SET booked = ? WHERE id = ?',
                    [post.booked ? 0: 1, post.id],
                    resolve,
                    (_, error) => reject()
                )
            })
        })
    }
    static removePost (id) {
        return new Promise((resolve, reject) => {
            db.transaction(tx => {
                tx.executeSql(
                    'DELETE FROM posts WHERE id = ?',
                    [id],
                    resolve,
                    (_, error) => reject()
                )
            })
        })
    }
}