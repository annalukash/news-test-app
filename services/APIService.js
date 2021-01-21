import React, { useEffect } from "react";
import { View } from "react-native";
import { useDispatch } from 'react-redux';
import { loadNews } from '../store/actions';

const APIService = (props) => {
    const APIKey = "3f10b348c34448fa91260e6ee4c22a8f";
    const dispatch = useDispatch();

    const getNews = async () => {
        const response = await fetch(
            `http://newsapi.org/v2/everything?domains=wsj.com&apiKey=${APIKey}`
        );

        return await response.json(); 
    };

    useEffect(() => {
        getNews().then(res => dispatch(loadNews(res.articles.filter((item, index) => index < 30))))
    }, []);

    return <View>{props.children}</View>;
};

export default APIService;
