{\rtf1\ansi\ansicpg1251\cocoartf2870
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\paperw11900\paperh16840\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\pard\tx720\tx1440\tx2160\tx2880\tx3600\tx4320\tx5040\tx5760\tx6480\tx7200\tx7920\tx8640\pardirnatural\partightenfactor0

\f0\fs24 \cf0 const express = require('express');\
const path = require('path');\
const app = express();\
const PORT = process.env.PORT || 3000;\
\
app.use(express.json());\
app.use(express.urlencoded(\{ extended: true \}));\
\
app.get('/', (req, res) => \{\
    res.sendFile(path.join(__dirname, 'index.html'));\
\});\
\
app.post('/api/login', (req, res) => \{\
    const \{ username, password \} = req.body;\
    console.log(`\uc0\u1054 \u1090 \u1088 \u1080 \u1084 \u1072 \u1085 \u1086  \u1076 \u1072 \u1085 \u1110  \'97 \u1051 \u1086 \u1075 \u1110 \u1085 : $\{username\}, \u1055 \u1072 \u1088 \u1086 \u1083 \u1100 : $\{password\}`);\
    res.json(\{ success: true, message: "\uc0\u1044 \u1072 \u1085 \u1110  \u1087 \u1088 \u1080 \u1081 \u1085 \u1103 \u1090 \u1086 !" \});\
\});\
\
app.listen(PORT, () => \{\
    console.log(`\uc0\u1057 \u1077 \u1088 \u1074 \u1077 \u1088  \u1087 \u1088 \u1072 \u1094 \u1102 \u1108  \u1085 \u1072  \u1087 \u1086 \u1088 \u1090 \u1091  $\{PORT\}`);\
\});}