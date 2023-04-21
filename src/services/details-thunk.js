import {createAsyncThunk} from "@reduxjs/toolkit"
import * as service from "./details-services"

export const findDetailsThunk = createAsyncThunk(
    '/details', async (id) => await service.findDetails(id)
)

export const buyTicketThunk = createAsyncThunk(
    '/api/ticket', async (ticket) => {
        const ticketBought = await service.createTicket(ticket)
        return ticketBought
    })


