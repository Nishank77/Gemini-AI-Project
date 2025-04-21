package com.ai.gemini.service;


import java.util.Map;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Service;
import org.springframework.web.reactive.function.client.WebClient;

import lombok.extern.slf4j.Slf4j;
import reactor.core.publisher.Mono;

@Service
@Slf4j
public class QnaService {

    @Value("${gemini.api.url}")
    private String GEMINI_API_URL;

    @Value("${gemini.api.key}")
    private String GEMINI_API_KEY;

    private final WebClient webClient;
    
    
    public QnaService(WebClient.Builder webClientBuilder) {
        this.webClient = webClientBuilder.baseUrl("https://generativelanguage.googleapis.com").build();
    }


    public String getAnswer(String question) {
        // Construct the Request Payload
        Map<String, Object> requestBody = Map.of(
            "contents", new Object[] {
                Map.of(
                    "parts", new Object[] {
                        Map.of("text", question)
                    }
                )
            }
        );

        // Log the constructed URL for debugging
        log.info("Sending request to URL: {}", GEMINI_API_URL);

        // Make the API Call
        return webClient.post()
            .uri(uriBuilder -> uriBuilder
                .path(GEMINI_API_URL)
                .queryParam("key", GEMINI_API_KEY)
                .build()
            )
            .header(HttpHeaders.CONTENT_TYPE, MediaType.APPLICATION_JSON_VALUE)
            .bodyValue(requestBody)
            .retrieve()
            .onStatus(
                status -> !status.is2xxSuccessful(),
                response -> response.bodyToMono(String.class)
                                    .flatMap(error -> Mono.error(new RuntimeException("API Error: " + error)))
            )
            .bodyToMono(String.class)
            .block();
    }
}