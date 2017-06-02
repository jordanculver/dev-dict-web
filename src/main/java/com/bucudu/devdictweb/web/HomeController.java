package com.bucudu.devdictweb.web;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 * Created by ders on 5/30/17.
 */
@Controller
@RequestMapping(path = "/view")
public class HomeController {

    @RequestMapping(path = "/home")
    public String getView() {
        return "Hi";
    }
}
