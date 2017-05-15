package com.kcsj.util;

import java.text.SimpleDateFormat;
import java.util.Date;

public class TimeUtil {
	/** 
	  * 得到完整的时间戳，格式:yyyyMMddHHmmssSSS(年月日时分秒毫秒) 
	  * @return 完整的时间戳 
	  */ 
	public static String getFullTimeStamp(){
		SimpleDateFormat format = new SimpleDateFormat("yyyyMMddHHmmssSSS");
		return format.format(new Date());
	}
}
