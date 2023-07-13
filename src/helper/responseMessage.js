import { NextResponse } from "next/server";

export const getResponseMessage = (messageText, statusCode, successStatus) => {
  return NextResponse.json(
    {
      message: messageText,
      success: successStatus,
    },
    {
      status: statusCode,
    }
  );
};
