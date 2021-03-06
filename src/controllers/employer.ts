import { Request, Response, NextFunction } from 'express'
import { getConnection } from 'typeorm'
import bcrypt from 'bcrypt'

import Employer from '../entities/Employer.postgres'
import { BadRequestError } from '../helpers/apiError'

// Register Employer
export const registerEmployer = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { companyName, email, password, companyInfo, address } = req.body

    const exists = await Employer.findOne({ email: email })

    if (exists) {
      next(new BadRequestError(`Provided eMail ${email} already exists`))
    }

    const hashedPassword = await bcrypt.hash(password, 8)

    const employer = new Employer()
    employer.companyName = companyName
    employer.email = email
    employer.password = hashedPassword
    employer.companyInfo = companyInfo
    employer.address = address

    await employer.save()
    res.status(200).json({ msg: 'Registered Successfully' })
  } catch (error) {
    next(new BadRequestError(error.message))
  }
}

export const updateEmployer = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const update = { ...req.body }
    await getConnection().createQueryBuilder().update(Employer).set({
      companyName: update.companyName,
      email: update.email,
      password: update.hashedPassword,
      companyInfo: update.companyInfo,
      address: update.address,
    })

    await Employer.save(update)
    return res.send(204).json({ msg: 'Updated successfully' })
  } catch (error) {
    next(new BadRequestError(error.message))
  }
}
