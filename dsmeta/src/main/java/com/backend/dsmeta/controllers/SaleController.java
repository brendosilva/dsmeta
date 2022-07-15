package com.backend.dsmeta.controllers;

import com.backend.dsmeta.entities.Sale;
import com.backend.dsmeta.services.SaleService;
import com.backend.dsmeta.services.SmsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.time.Instant;
import java.time.LocalDate;
import java.time.ZoneId;
import java.util.List;

@RestController
@RequestMapping(value = "/sales")
public class SaleController {
    @Autowired
    private SaleService saleService;

    @Autowired
    private SmsService smsService;

    @GetMapping
    public ResponseEntity<Page<Sale>> all(@RequestParam(
            value = "minDate", defaultValue = ""
    ) String minDate,@RequestParam(
            value = "maxDate", defaultValue = ""
    ) String maxDate, Pageable pageable){

        var all = saleService.findSales(minDate,maxDate,pageable);
        return ResponseEntity.ok().body(all);
    }

    @GetMapping("/notification")
    public void notifySms() {
        smsService.sendSms();
    }
}
