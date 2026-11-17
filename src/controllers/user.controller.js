import { upload } from "../middlewares/multer.middleware.js";
import { User } from "../models/user.model.js";
import { ApiError } from "../utils/ApiError.js";
import {ApiResponse } from "../utils/ApiResponse.js"
import { asyncHandler } from "../utils/asyncHandler.js";
import { uploadOnCloudinary } from "../utils/cloudinary.js"

const registerUser = asyncHandler(async (req,res) => {
    // get users details from frontend
    // validation - not empty
    // check if users already exist
    // check for avatar ,and images
    // upload them to cloudnary avatar
    // create user object - create entry in DB
    // romove password and refresh Token field from response
    //  check for user creation
    // return res


    const { fullName, email, username, password } = req.body

    if (
        [fullName, email, username, password].some((field) => field.trim() === "")
    ) {
        throw new ApiError(400,"All fields are required")
    }
    const existedUser = User.findOne({
        $or:[{username},{email}]
    })
    if (existedUser) {
        throw new ApiError(409,"User with email or username")
    }
    const avatarLocalPath = res.fields?.avatar[0]?.path
    const coverImageLocalPath = res.fields?.coverImage[0]?.path
    if (!avatarLocalPath) {
        throw new ApiError(400,"Avatar file is required")
    }

    const avatar = await uploadOnCloudinary(avatarLocalPath)
    const coverImage = await uploadOnCloudinary(coverImageLocalPath)

    if (!avatar) {
        throw new ApiError(400, "Avatar file is required")
    }

    const user = await User.create({
        fullName,
        avatar:avatar.url,
        coverImage: coverImage?.url || "",
        email,
        password,
        username : username.toLowerCase()

    })

    const createdUser = await User.findById(user._id).select(
        "-password -refreshToken"
    )
    if (!createdUser) {
        throw new ApiError(500,"Some thing went wrong while registering the user")
    }

    console.log("email :",email)
    console.log("password :", password)
    console.log("email :",email)

    return res.status(201).json(
        new ApiResponse(200,createdUser,"User registered Successfully.")
    )

})

export {registerUser} 