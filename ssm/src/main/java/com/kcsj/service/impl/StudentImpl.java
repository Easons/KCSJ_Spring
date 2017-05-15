package com.kcsj.service.impl;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import com.kcsj.dao.StudentMapper;
import com.kcsj.pojo.Student;
import com.kcsj.service.StudentService;

@Service("studentService")
public class StudentImpl implements StudentService {
	
	@Resource
	private StudentMapper studentdao;
	
	public Student querybyid(int id){
		return studentdao.selectByPrimaryKey(id);
	}
}
