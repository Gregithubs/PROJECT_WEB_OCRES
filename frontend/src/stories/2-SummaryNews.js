import React from 'react';
import { action } from '@storybook/addon-actions';
import SummaryNews from '../Components/SummaryNews';

export default {
  title: 'SummaryNews',
};

const obj = {
    "_type":"News",
    "webSearchUrl":"https://www.bing.com/news/search?q=top+stories&form=TNSA02",
    "value":{
        news:{
            "_type":"NewsArticle",
            "name":"Nachgeben an der Grenze führt nur zu neuem Elend",
            "url":"https://www.msn.com/de-de/nachrichten/politik/nachgeben-an-der-grenze-f%C3%BChrt-nur-zu-neuem-elend/ar-AARaust",
            "image":{
                "_type":"ImageObject",
                "thumbnail":{
                    "_type":"ImageObject",
                    "contentUrl":"https://www.bing.com/th?id=OVFT.wvGKa6IFYEDddA59TicUSi&pid=News",
                    "width":1200,
                    "height":630,
                },
            },
            "description":"  Die jüngsten Bilder von der Grenze zwischen Polen und Belarus sind aus menschlicher Sicht schwer erträglich. Das Elend, die Not, die Verzweiflung der Menschen führen uns eindrücklich vor Augen, wie",
            "datePublished":"2021-11-26T16:30:00.0000000Z",
        }
    }
}


export const text = () => <SummaryNews newsData={obj}/>;

export const empty = () => (
  <SummaryNews />
);