import Mock from 'mockjs';

Mock.mock('/api/user', {
    "data": {
        "list": [
            {
                "id": 1,
                "name": "a"
            },
            {
                "id": 2,
                "name": "b"
            },
            {
                "id": 3,
                "name": "c"
            },
            {
                "id": 4,
                "name": "d"
            }
        ]
    },
    "recodeMsg": "success",
    "code": 200
});