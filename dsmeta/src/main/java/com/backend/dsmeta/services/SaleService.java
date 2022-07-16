package com.backend.dsmeta.services;


import com.backend.dsmeta.entities.Sale;
import com.backend.dsmeta.repositories.SaleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.time.Instant;
import java.time.LocalDate;
import java.time.ZoneId;
import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class SaleService {

    @Autowired
    private SaleRepository saleRepository;

    public Page<Sale> findSales(String minDate, String maxDate, Pageable pageable) {
        var today = LocalDate.ofInstant(Instant.now(), ZoneId.systemDefault());
        var min = minDate.equals("") ? today.minusDays(365) : LocalDate.parse(minDate);
        var max = maxDate.equals("") ? today : LocalDate.parse(maxDate);
        var all = saleRepository.findSales(min, max, pageable);

        return all;
    }


}
