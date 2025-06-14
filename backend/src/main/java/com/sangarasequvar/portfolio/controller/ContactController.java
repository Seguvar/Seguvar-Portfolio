package com.sangarasequvar.portfolio.controller;

import com.sangarasequvar.portfolio.dto.ContactRequest;
import com.sangarasequvar.portfolio.dto.ContactResponse;
import com.sangarasequvar.portfolio.service.EmailService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:4200")
public class ContactController {

    @Autowired
    private EmailService emailService;

    @PostMapping("/contact")
    public ResponseEntity<ContactResponse> sendContactEmail(@Valid @RequestBody ContactRequest request) {
        try {
            emailService.sendContactEmail(request);
            emailService.sendThankYouEmail(request.getEmail(), request.getName());

            ContactResponse response = new ContactResponse(true, "Message sent successfully!");
            return ResponseEntity.ok(response);
        } catch (Exception e) {
            ContactResponse response = new ContactResponse(false, "Failed to send message. Please try again.");
            return ResponseEntity.badRequest().body(response);
        }
    }

    @GetMapping("/health")
    public ResponseEntity<String> healthCheck() {
        return ResponseEntity.ok("Backend is running!");
    }
}
