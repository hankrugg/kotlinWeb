package com.example.plugins

import io.ktor.client.*
import io.ktor.client.request.*
import io.ktor.client.statement.*
import io.ktor.http.*
import io.ktor.server.application.*
import io.ktor.server.response.*
import io.ktor.server.routing.*


fun Application.configureRouting() {
    val client = HttpClient()

    routing {
        get("/search") {
            // get the date from the request
            val date = call.request.queryParameters["date"]
            try {
                // Make an HTTP GET request
                val url = "https://api.nasa.gov/planetary/apod?api_key=qLOgvAwaPQS7Dt4lf6uLnlXHZYwyKdZxChamrA0T" +
                        "&date=$date"
                val response: HttpResponse = client.get(url)
                // check if the response status is OK
                if (response.status == HttpStatusCode.OK) {
                    val jsonString = response.bodyAsText()
                    call.respond(jsonString)
                } else {
                    //error if the response status is not OK
                    call.respondText("Unexpected response", status = HttpStatusCode.BadRequest)
                }
            } catch (e: Exception) {
                call.respondText("An error occurred",  status = HttpStatusCode.BadRequest)
            }

        }
    }
}