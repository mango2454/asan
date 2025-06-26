const express = require("express");
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const bodyParser = require("body-parser");
const session = require("express-session");
const path = require("path");
const cors = require('cors'); // 필요하면

const app = express();

// CORS 허용 (필요 시)
app.use(cors());

// MongoDB 연결
mongoose.connect('mongodb+srv://mango:Rudghks_2454@cluster2.zvsgmre.mongodb.net/')
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.error("MongoDB 연결 오류:", err));

// 정적 파일 제공
app.use('/register', express.static(path.join(__dirname, 'register')));
app.use('/login', express.static(path.join(__dirname, 'login')));
app.use('/complete', express.static(path.join(__dirname, 'complete')));
app.use(express.static(__dirname)); 

// body-parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// 세션
app.use(session({
    secret: 'secret_key',
    resave: false,
    saveUninitialized: true
}));

// User 모델
const userSchema = new mongoose.Schema({
    username: String,
    password: String
});
const User = mongoose.model('User', userSchema);

// 회원가입 라우트
app.post('/api/register', async (req, res) => {
    const { username, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    await new User({ username, password: hashedPassword }).save();
    res.redirect("/login/login.html");
});

// 로그인 라우트
app.post('/api/login', async (req, res) => {
    const { username, password } = req.body;
    const user = await User.findOne({ username });
    if (!user) return res.send("사용자를 찾을 수 없습니다.");

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.send("비밀번호가 일치하지 않습니다.");

    req.session.user = user;
    res.redirect("/complete/complete.html");
});

// 로그아웃
app.get('/api/logout', (req, res) => {
    req.session.destroy(() => {
        res.redirect("/main.html?logout=1");
    });
});

// 모든 IP에서 접속 허용
app.listen(3000, '0.0.0.0', () => {
    console.log("서버 실행 중 http://0.0.0.0:3000");
});
