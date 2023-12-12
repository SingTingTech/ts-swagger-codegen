package com.example.demo.controller;

import com.example.demo.vo.User;
import io.swagger.v3.oas.annotations.OpenAPI31;
import io.swagger.v3.oas.annotations.OpenAPIDefinition;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.info.Info;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@Controller
@Tag(name = "user")
public class UserController {

    @GetMapping("user")
    @Operation
    public User getUserById(@RequestParam Integer userId) {
        return new User();
    }

    @GetMapping("userAndName")
    @Operation
    public User getUserByIdAndName(@RequestParam Integer userId,
                                   @RequestParam String name) {
        return new User();
    }

    @PostMapping("user")
    @Operation
    public User addUser(@RequestBody User user) {
        return new User();
    }

    @DeleteMapping("user/{userId}")
    @Operation
    public int deleteUser(@PathVariable Integer userId) {
        return 1;
    }

    @PatchMapping("user")
    @Operation
    public void patchUser(User user) {

    }

    @PutMapping("user")
    @Operation
    public void putUser(@RequestParam("user") User user) {

    }




}

