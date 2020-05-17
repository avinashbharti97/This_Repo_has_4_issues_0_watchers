import { Router } from 'https://deno.land/x/oak/mod.ts'
import {getRepoData} from './controller.ts'

const router = new Router()
router.get('/getRepoData', getRepoData)

export default router