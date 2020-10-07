import chai, { expect } from 'chai'
import sinon from 'sinon'
import dotenv from 'dotenv'
import 'module-alias/register'
import chaiAsPromised from 'chai-as-promised'
chai.use(chaiAsPromised)
chai.config.includeStack = true
dotenv.config()
global.expect = expect
global.sinon = sinon
