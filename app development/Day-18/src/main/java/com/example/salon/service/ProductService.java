//package com.example.salon.service;
//
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.data.domain.Page;
//import org.springframework.data.domain.PageRequest;
//import org.springframework.data.domain.Pageable;
//import org.springframework.data.domain.Sort;
//import org.springframework.stereotype.Service;
//
//import com.example.salon.Entity.ProductEntity;
//import com.example.salon.repository.ProductRepository;
//@Service
//public class ProductService {
//
//
//
//
//	@Autowired
//	ProductRepository productRepository;
//		public Page<ProductEntity> SortingAndPaging(int page,int size,String field){
//			Pageable paging=PageRequest.of(page, size).withSort(Sort.by(field));
//			return productRepository.findAll(paging);
//		}
//		public Page<ProductEntity> Paging(int CurrentPage,int itemsPerPage){
//			Pageable paging=PageRequest.of(CurrentPage,itemsPerPage);
//			return productRepository.findAll(paging);
//		}
//}
//
