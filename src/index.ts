import {
    PrismaClient
} from "@prisma/client";
const prisma = new PrismaClient()
import express, {
    Request,
    Response
} from 'express';
const app = express();
app.use(express.json());
const port = process.env.PORT || 4003;

app.get('/', async (req: Request, res: Response) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers,Content-Type,Access-Control-Allow-Methods, Authorization, X-Requested-With');
    res.header('Access-Control-Allow-Methods', 'GET');
    res.header('X-Frame-Options', 'DENY');
    res.header('X-XSS-Protection', '1; mode=block');
    res.header('X-Content-Type-Options', 'nosniff');
    res.header('Strict-Transport-Security', 'max-age=63072000');
    res.setHeader('Content-Type', 'application/json');
    app.disable('x-powered-by');
    res.json({
        message: 'Cycling Quotes API V0.0.1'
    });
});

app.post('/push', async (req: Request, res: Response) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers,Content-Type,Access-Control-Allow-Methods, Authorization, X-Requested-With');
    res.header('Access-Control-Allow-Methods', 'GET');
    res.header('X-Frame-Options', 'DENY');
    res.header('X-XSS-Protection', '1; mode=block');
    res.header('X-Content-Type-Options', 'nosniff');
    res.header('Strict-Transport-Security', 'max-age=63072000');
    res.setHeader('Content-Type', 'application/json');
    app.disable('x-powered-by');
    const {
        quotes,
        author
    } = req.body;
    if (!quotes?.trim() || !author?.trim()) {
        return res.status(400).json({
            message: 'Empty input Data - Fill Quotes and Author Name.'
        });
    }
    const cycling = await prisma.cycling.create({
        data: {
            quotes: String(quotes),
            author: String(author)
        }
    });
    res.json({
        cycling
    });
});

app.get('/quotes', async (req: Request, res: Response) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers,Content-Type,Access-Control-Allow-Methods, Authorization, X-Requested-With');
    res.header('Access-Control-Allow-Methods', 'GET');
    res.header('X-Frame-Options', 'DENY');
    res.header('X-XSS-Protection', '1; mode=block');
    res.header('X-Content-Type-Options', 'nosniff');
    res.header('Strict-Transport-Security', 'max-age=63072000');
    res.setHeader('Content-Type', 'application/json');
    app.disable('x-powered-by');
    const cycling = await prisma.cycling.findMany();
    res.json({
        cycling
    });
});

app.get('/quotes/:id', async (req: Request, res: Response) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers,Content-Type,Access-Control-Allow-Methods, Authorization, X-Requested-With');
    res.header('Access-Control-Allow-Methods', 'GET');
    res.header('X-Frame-Options', 'DENY');
    res.header('X-XSS-Protection', '1; mode=block');
    res.header('X-Content-Type-Options', 'nosniff');
    res.header('Strict-Transport-Security', 'max-age=63072000');
    res.setHeader('Content-Type', 'application/json');
    app.disable('x-powered-by');
    const {
        id
    } = req.params;
    const cycling = await prisma.cycling.findUnique({
        where: {
            id: Number(id)
        }
    });
    if (cycling == null) {
        res.status(400).json({
            cycling: 'Empty Data'
        });
    } else {
        res.json({
            cycling
        });
    }
});

app.patch('/push/:id', async (req: Request, res: Response) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers,Content-Type,Access-Control-Allow-Methods, Authorization, X-Requested-With');
    res.header('Access-Control-Allow-Methods', 'GET');
    res.header('X-Frame-Options', 'DENY');
    res.header('X-XSS-Protection', '1; mode=block');
    res.header('X-Content-Type-Options', 'nosniff');
    res.header('Strict-Transport-Security', 'max-age=63072000');
    res.setHeader('Content-Type', 'application/json');
    app.disable('x-powered-by');
    const {
        id
    } = req.params;
    const {
        quotes,
        author
    } = req.body;
    if (!quotes?.trim() || !author?.trim()) {
        return res.status(400).json({
            message: 'Empty input Data - Fill Quotes and Author Name.'
        });
    }
    const cycling = await prisma.cycling.update({
        where: {
            id: Number(id)
        },
        data: {
            quotes: String(quotes),
            author: String(author)
        }
    });
    res.json({
        message: "success",
        data: cycling
    });
});

app.delete('/push/:id', async (req: Request, res: Response) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers,Content-Type,Access-Control-Allow-Methods, Authorization, X-Requested-With');
    res.header('Access-Control-Allow-Methods', 'GET');
    res.header('X-Frame-Options', 'DENY');
    res.header('X-XSS-Protection', '1; mode=block');
    res.header('X-Content-Type-Options', 'nosniff');
    res.header('Strict-Transport-Security', 'max-age=63072000');
    res.setHeader('Content-Type', 'application/json');
    app.disable('x-powered-by');
    const {
        id
    } = req.params;
    const cycling = await prisma.cycling.delete({
        where: {
            id: Number(id)
        }
    });
    res.json({
        message: "success"
    });
});

app.listen(port, function() {
    console.log('listening on port ' + port);
});

app.use('/', function(req, res) {
    res.status(404).json({
        error: 1,
        message: 'API Endpoint not Found'
    });
});

module.exports = app;