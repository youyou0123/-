import styled from 'styled-components';

export const HomeWrapper = styled.div`
    overflow:hidden;
    width:960px;
    margin:0 auto;
`;
export const HomeLeft = styled.div`
   float:left;
    margin-left:15px;
    padding-top:30px;
    width:625px;
    .banner-img{
        width:625px;
        height:100px;
    }
`;
export const HomeRight = styled.div`
    width:280px;
    float:right;
`
export const TopicWrapper = styled.div`
    overflow:hidden;
    padding:20px 0 10px 0;
    margin-left:-18px;
    border-bottom: 1px solid #dcdcdc;
`;
export const TopicItem = styled.div`
    float:left;
    height:32px;
    line-height:32px;
    background:#f7f7f7;
    font-size:14px;
    color:#000;
    borer:1px solid #dcdcdc;
    border-radius:4px;
    margin: 0 0 18px 18px;
    padding-right:10px;
    .topic-pic{
        dispaly:block;
        float:left;
        width:32px;
        height:32px;
        margin-right:10px;
    }
`;
export const ListItem = styled.div`
    overflow:hidden;
    padding:20px 0;
    border-bottom:1px solid #dcdcdc;
    .pic{
        display:block;
        width:125px;
        height:100px;
        float:right;
        border-radius:10px;
    }
`;
export const ListInfo = styled.div`
    width:500px;
    float:left;
    .title{
        line-height:27px;
        font-size:18px;
        font-weight:bold;
        color:#333;
    }
    .desc{
        line-height:24px;
        font-size:13px;
        color:#999;
    }
`;
export const RecommendWrapper = styled.div`
    margin:30px 0;
    width:280px;

`;
export const RecommendItem = styled.div`
    width:280px;
    height:50px;
    background:url(${ (props) => props.imgUrl } );
    background-size:contain;
    cursor:pointer;
`;
export const LoadMore = styled.div`
    width:100%;
    height:40px;
    margin: 30px 0;
    line-height:40px;
    background:#a5a5a5;
    text-align:center;
    border-radius:20px;
    color:#fff;
    cursor:pointer;
`;
export const BackTop = styled.div`
    position:fixed;
    right:100px;
    bottom:100px;
    width:60px;
    height:60px;
    line-height:60px;
    text-align:center;
    border:1px solid #ccc;
    font-size:14px;
    cursor:pointer;

`;

// Writer样式
export const WriterWrapper = styled.div`
    overflow:hidden;
    width:275px;
    height:430px;
    border:1px solid #dcdcdc;
`;
export const WriterItem = styled.div`
    float:left;
    width:250px;
    height:60px;
    margin:5px 10px 5px 10px;
    background:#fff;
    img{
        float:left;
        width:48px;
        height:48px;
        vertical-align:top;
        border-radius:50%;
        margin:5px;
    }
`;
export const Item1 = styled.div`
    float:left;
    display:inline-block;
    font-size:16px;
    line-height:20px;
    color:#000;
    padding:10px 10px 5px 10px;
`;
export const Item2 = styled.div`
    float:right;
    display:inline-block;
    font-size:14px;
    line-height:20px;
    color:#5AC356;
    padding:10px 10px 5px 10px;
`;
export const Item3 = styled.div`
    float:left;
    display:inline-block;
    font-size:12px;
    line-height:16px;
    color:#787878;
    margin-left:70px;
    margin-top:-25px;
`;


