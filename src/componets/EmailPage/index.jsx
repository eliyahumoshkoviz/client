import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import style from './style.module.css';

import { axiosReq } from '../../fonction/axiosReq';
import EmailTitle from '../EmailTitle';
import MsgLi from '../MsgLi';


export default function EmailPage() {
    const [dataChat, setDataChat] = useState([]);

    const { chatId } = useParams()

    useEffect(() => {
        setDataChat([]);
        getChat();
    }, [chatId]);

    const getChat = async () => {
        try {
            const data = await axiosReq({ url: `chat/${chatId}` })
            setDataChat(data);
        } catch (error) {
            console.error("Error fetching data: ", error?.response);
        }
    };

    return (
        <div className={style.container} >
            <EmailTitle subject={dataChat.subject} lastDate={dataChat.lastDate} />
            <div className={style.messagesLi}>
                {dataChat.msg && dataChat.msg.map((msg) => (
                    <MsgLi key={msg._id} msg={msg} />
                ))}
            </div>
        </div>
    )
}