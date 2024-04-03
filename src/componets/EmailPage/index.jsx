import  EmailTitle  from '../EmailTitle';

import MsgLi from '../MsgLi';
import style from './style.module.css';


const emails = [
    {
        "email": {
            "_id": "6602c49eeb02aca8db6f8282",
            "subject": "Meeting with new investors",
            "lastDate": "2024-03-21T10:24:00.000Z",
            "msg": [
                {
                    "_id": "6602c49ceb02aca8db6f8274",
                    "to": ["user1@example.com"],
                    "from": "user2@example.com",
                    "date": "2024-03-21T10:00:00.000Z",
                    "content": "Hi, I have a new meeting opportunity, and I don’t know how to use it",
                    "subject": "Meeting with new investors",
                    "__v": 0
                },
                {
                    "_id": "6602c49deb02aca8db6f8276",
                    "to": ["user2@example.com"],
                    "from": "user1@example.com",
                    "date": "2024-03-21T10:08:00.000Z",
                    "content": "- Hi, I have a new meeting opportunity, and I don’t know how to use it",
                    "subject": "Meeting with new investors",
                    "__v": 0
                },
                {
                    "_id": "6602c49deb02aca8db6f8278",
                    "to": ["user1@example.com"],
                    "from": "user2@example.com",
                    "date": "2024-03-21T10:24:00.000Z",
                    "content": "Walla Sababa !!",
                    "subject": "Meeting with new investors",
                    "__v": 0
                }
            ],
            "__v": 0
        },
        "isSent": true,
        "isRecieved": false,
        "isFavorite": true,
        "isDeleted": false,
        "isRead": true,
        "_id": "6602c49eeb02aca8db6f8287"
    },
    {
        "email": {
            "_id": "6602c49eeb02aca8db6f8284",
            "subject": "Report Request",
            "lastDate": "2024-03-21T07:30:00.000Z",
            "msg": [
                {
                    "_id": "6602c49deb02aca8db6f827a",
                    "to": ["user2@example.com"],
                    "from": "user3@example.com",
                    "date": "2024-03-20T09:30:00.000Z",
                    "content": "Could you please send me the report? kjns a askd askd asd kaskd kasd kasdjasjd asd jasd jsa dj",
                    "subject": "Report Request",
                    "__v": 0
                },
                {
                    "_id": "6602c49deb02aca8db6f827c",
                    "to": ["user3@example.com"],
                    "from": "user2@example.com",
                    "date": "2024-03-20T10:45:00.000Z",
                    "content": "whyyyyy?!?!",
                    "subject": "Report Request",
                    "__v": 0
                },
                {
                    "_id": "6602c49deb02aca8db6f827e",
                    "to": ["user2@example.com"],
                    "from": "user3@example.com",
                    "date": "2024-03-20T10:57:00.000Z",
                    "content": "Thank you for reaching out to inquire about the availability of our products. We are pleased to inform you that the item you are interested in is currently in stock and ready for purchase. You can place your order directly through our website https://practicum.workin.co.il  to make a purchase in person.Thank you for considering our products.",
                    "subject": "Report Request",
                    "__v": 0
                },
                {
                    "_id": "6602c49deb02aca8db6f8280",
                    "to": ["user3@example.com"],
                    "from": "user2@example.com",
                    "date": "2024-03-21T07:30:00.000Z",
                    "content": "Ok, i'm fired!",
                    "subject": "Report Request",
                    "__v": 0
                }
            ],
            "__v": 0
        },
        "isSent": true,
        "isRecieved": true,
        "isFavorite": false,
        "isDeleted": false,
        "isRead": false,
        "_id": "6602c49eeb02aca8db6f8288"
    }
]
const user = { "userId": "602c49ceb02aca8db6f826d", "mail": "user2@example.com" }

export default function EmailPage() {
    return (
        <div className={style.container} >
            <EmailTitle email={emails[0].email} />
            {emails[1].email.msg.map((msg) => (
                <MsgLi key={msg._id} msg={msg} user={user} />
            ))}
        </div>
    )
}