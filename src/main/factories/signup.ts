import { DbAddAccount } from '../../data/usecases/add-account/db-add-account'
import { BcryptAdapter } from '../../infra/criptography/bcrypt-adapter'
import { AccountMongoRepository } from '../../infra/db/mongodb/account-repository/account'
import { EmailValidatorAdapter } from '../../utils/email-validator-adapter'
import { SignUpController } from '../../presentation/controllers/signup/signup'

export const makeSignUpController = (): SignUpController => {
  const salt = 12
  const bcryptAdapter = new BcryptAdapter(salt)
  const emailValidatorAdapter = new EmailValidatorAdapter()
  const accountMongoRepository = new AccountMongoRepository()
  const dbaddAccount = new DbAddAccount(bcryptAdapter, accountMongoRepository)
  return new SignUpController(emailValidatorAdapter, dbaddAccount)
}
