//미들웨어 받아오기
const express = require('express')
const bodyParser = require('body-parser')

const app = express()

app.use(bodyParser.json())

app.use('/', express.static(__dirname + '/public'))

app.get('/keyboard', (req, res) => {
  const menu = {
      type: 'buttons',
      buttons: ["프로필", "세부 전공", "취미(씹덕주의)", "수상 실적", "기타 정보"]
  };
  res.send(menu);
});

app.post('/message', (req, res) => {
  let user_key = req.body.user_key
  let type = req.body.type
  let content = req.body.content
  let message;
  if(content == "프로필"){
    message = {
        "message": {
            "text": '선린인터넷고등학교 2학년 김도현\n\n사용중인 닉네임 nonameP, blgada12\n\n인공지능 동아리 이모션 부장\n\n청소년 창업팀 Raspberry Soft 소속\n\n2017 15인치 맥북,아이폰8 유저\n\n(사진 중간에 있는게 나임)',
            "photo": {
              "url": "http://ngdb.iptime.org/asset/img/profile.jpg",
              "width":800,
              "height": 600
            }
        },
        "keyboard": {
            "type": "buttons",
            "buttons": ["프로필", "세부 전공", "취미(씹덕주의)", "수상 실적", "기타 정보"]
        }
    };
  }
  if(content == "세부 전공"){
    message = {
        "message": {
            "text": 'JavaScript\n\nnodeJS를 사용한 웹,api서버\n\nReact Native를 활용한 하이브리드 엡 제작\n\n\nPython\n\n텐서플로우를 활용한 인공지능 프로그래밍\n\n\nJava(Kotlin)\n\n안드로이드 앱 프로그래밍\n\n\nC#\n\nUnity3D를 활용한 게임 제작'
        },
        "keyboard": {
            "type": "buttons",
            "buttons": ["프로필", "세부 전공", "취미(씹덕주의)", "수상 실적", "기타 정보"]
        }
    };
  }
  if(content == "수상 실적"){
    message = {
        "message": {
            "text": '2017년도\n\nSTAC 예선 통과\n\n수학 경시대회 장려\n\n모바일 컨텐츠 경진대회 은상\n\n서울시 앱 공모전 입상\n\n디지털 컨텐츠 경진대회 은상'
        },
        "keyboard": {
            "type": "buttons",
            "buttons": ["프로필", "세부 전공", "취미(씹덕주의)", "수상 실적", "기타 정보"]
        }
    };
  }
  if(content == "취미(씹덕주의)"){
    message = {
        "message": {
            "text": '아이돌마스터 본가 프로듀서\n\n현재 최애캐는 하기와라 유키호\n\n어째튼 골수 씹덕임 뭐든 물어봐',
            "photo": {
              "url": "http://ngdb.iptime.org:765/asset/img/yukiho.png",
              "width":600,
              "height": 800
            }
        },
        "keyboard": {
            "type": "buttons",
            "buttons": ["프로필", "세부 전공", "취미(씹덕주의)", "수상 실적", "기타 정보"]
        }
    };
  }
  if(content == "기타 정보"){
    message = {
        "message": {
            "text": '어딜 통해 날 만나볼래?'
        },
        "keyboard": {
            "type": "buttons",
            "buttons": ["티스토리", "깃허브", "페이스북", "아이돌마스터 생일정보"]
        }
    };
  }
  if(content == "티스토리"){
    message = {
        "message": {
            "text": '티스토리 블로그\n\n여러가지 배운것들을 기록하는 곳',
            "message_button": {
              "label": "Tistory",
              "url": "https://blgada12.tistory.com/"
            }
        },
        "keyboard": {
            "type": "buttons",
            "buttons": ["프로필", "세부 전공", "취미(씹덕주의)", "수상 실적", "기타 정보"]
        }
    };
  }
  if(content == "깃허브"){
    message = {
        "message": {
            "text": '깃허브 페이지\n\n프로젝트를 정리하는 곳',
            "message_button": {
              "label": "Github",
              "url": "https://github.com/blgada12"
            }
        },
        "keyboard": {
            "type": "buttons",
            "buttons": ["프로필", "세부 전공", "취미(씹덕주의)", "수상 실적", "기타 정보"]
        }
    };
  }
  if(content == "페이스북"){
    message = {
        "message": {
            "text": '페이스북\n\n잡담이나 개발 현황을 올리는 곳',
            "message_button": {
              "label": "Facebook",
              "url": "https://www.facebook.com/profile.php?id=100014192852787"
            }
        },
        "keyboard": {
            "type": "buttons",
            "buttons": ["프로필", "세부 전공", "취미(씹덕주의)", "수상 실적", "기타 정보"]
        }
    };
  }
  if(content == "아이돌마스터 생일정보"){
    message = {
        "message": {
            "text": '노드JS로 돌아가는 api Web서버\n\n직접 만듬 잘만듬',
            "message_button": {
              "label": "IM@S birthday",
              "url": "http://idolbirthday.oa.to"
            }
        },
        "keyboard": {
            "type": "buttons",
            "buttons": ["프로필", "세부 전공", "취미(씹덕주의)", "수상 실적", "기타 정보"]
        }
    };
  }


    res.send(message);
});

app.post('/friend', (req, res) => {
    const user_key = req.body.user_key;
    console.log(`${user_key}님이 쳇팅방에 참가했습니다.`);
    res.send({success:true});
});
app.delete('/friend', (req, res) => {
    const user_key = req.body.user_key;
    console.log(`${user_key}님이 쳇팅방을 차단했습니다.`);
    res.send({success:true});
});
app.delete('/chat_room/:user_key', (req, res) => {
    const user_key = req.params.user_key;
    console.log(`${user_key}님이 쳇팅방에서 나갔습니다.`);
    res.send({success:true});
});
//나머지 주소로 들어오면 다 404를 띄워버림
app.get('*', (req, res) => {
    res.status(404).end()
})

app.listen(80)
console.log("localhost:8081에서 실행중")
