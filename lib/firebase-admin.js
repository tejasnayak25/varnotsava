import * as admin from 'firebase-admin';
import * as client from '@/lib/firebase-client';

const firebaseAdminConfig = {
        "type": "service_account",
        "project_id": "shi-novus",
        "private_key_id": "681b35d7051c090d8af1d6aa0f28c7fee7256889",
        "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQCx+NJS7HR6RzpF\nDo0P6+PbGjLQ5EK7DNYMCGquFsgL3rp3vcayjctu44uDzCmE9jaDR7pAZ9foXCz/\nW4c2D4T+FzhgNOigV3s7ft5ox99wMWFqup6OcBkBBDVwkl2Oectye1+Vg3C3XOTP\nJXRy9sbGoelMqg45lvJeM+gw5fy6NYp3loqKDGTVXSgjUWY2x4yI5WfDIwc2JJzc\n/ki5tzKh7lHKrrozqip6Bvi1UFqmHUtpi1YstqnE+m+bNw67vDNylsxYmRmTW+hJ\nrkg6rFdoT1nbUUz0wZd/SUxmsMT4U6v8YFqCLDhC3DN2JlO3LJn1eV+CXvFe4K7C\nY2/9boszAgMBAAECggEADs6JTR3gGPZJGkq6ILt68xUsaiW7iY1pV4nxujcqAJbQ\nw7qVx/A1Hy4uQtJfF/FWGrkCfW5GT84vbjViu/Qxl+Q9q/9q5UAyAAKvpV8Pr2lk\nVfldzLL12ZhMi+eZgguPCiDKlIlhfNftL3DJzfDLG+aHnvm9AjyVQJIn/L19t84t\n7evalGvqPvSlkbWFOU7LCEq5lhe9AQQDcdHamteup5CCkFmhf82+hbMgy8MOonRl\nneEhgN6+uNJBmVHVWy69WcBTLfbfzz4MDARL+rhqBnFjWB3GnbglumjHPTSbS+8g\n4nUpWV1DG2TVeh/JshRMmeGnLcVfZH8wa9tDQS1BBQKBgQDmlibmddxC2FBq4AP5\ncLlkv7Ch4qsU/lzA/e72vxAT0eTSwuRaLatMfhaRZeB9SFtD8dfcYt6vlRvP+mip\nevd/2u/8bl+VzS69Ai2BbwCPQuMVbHEROSy65nk90eNyAuBR0w8g8aV9WBLwy1RC\nI1TK2+/lNFcFPDx9h3joWLdIbwKBgQDFli8VVcdamAoz6ilwrbvhoyPsXJdyGa8w\nIfNvVnOvjQHESiWDkX+1a9DsU9Vyq2/QkadAIfV7TIjBB7nSn9ztOZ/F1JPn6j3S\ntA+Z+uieY9koExTItAKQpq+5abtXfNZPT8qaJDSLOytAyowGvPLkJhWfnGPAMgOT\ntSTufgcjfQKBgFRpDQ56gMo7k5y8KthKaqO2BHwOlSBXSS8hBjRvlvwabxC0ZZGZ\nfEbBNZO+XqKeNUK3KpUz4F8YT5kgCuZX7Hhydj3LTdRxyzVHsc7bCrJnAugZzX5H\nltdIfYOi7QcUhHePss8VhsZO0ogxdsPLWUP1pWkbcuuotGAjkqBDsbyjAoGBAJiu\nDr/7wsp8hhXLsi4B8hbPi6jPe6+NrVQSSBwWv9o9qcnWSdq7CeZU4+JafavYUdTn\nWEg0dY7Lezk+ERdytLMTPiUOuSQSW6d/wDaKLkqGeX2AESVuBDVmuI8b5soaCzjK\nPZKSu4+DL08ntMBYLZCi5T6rCGGxxBXVei5YcIe5AoGAOhFdVMzTAIqhooNZEWDG\nu2btlkviyOBdUGKeL5c80tfR1IcZV1sjJmW2iwU6lmHHlfRpvO/guQG7Bqm0nHJh\nNqMLBnBf7t4FpMRAwyElY5pYrurVlaE3n0kaxm+Ys8Cw/wyHWpC4Ddk84A3EB3ow\nTEvyAlbaPwRd08XXHNv8OG8=\n-----END PRIVATE KEY-----\n",
        "client_email": "firebase-adminsdk-hsit2@shi-novus.iam.gserviceaccount.com",
        "client_id": "113109101608239787754",
        "auth_uri": "https://accounts.google.com/o/oauth2/auth",
        "token_uri": "https://oauth2.googleapis.com/token",
        "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
        "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-hsit2%40shi-novus.iam.gserviceaccount.com",
        "universe_domain": "googleapis.com"
};

let app = admin.initializeApp({
    credential: admin.credential.cert(firebaseAdminConfig)
});

let firestore = app.firestore();

let storage = app.storage();
let bucket = storage.bucket(client.firebaseConfig);


export function collection (model) {
    let reqModel = new model();
    return firestore.collection(reqModel.name);
}

export async function upload (path, destination) {
    return bucket.upload(path, {
        destination: destination
    });
}