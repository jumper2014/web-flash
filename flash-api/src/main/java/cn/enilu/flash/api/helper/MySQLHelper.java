package cn.enilu.flash.api.helper;

import cn.enilu.flash.api.constant.MySQL;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.datasource.DriverManagerDataSource;

public class MySQLHelper {
    public JdbcTemplate connectMerchantDb () {
        return connectDb(MySQL.merchantDbUrl);
    }

    public JdbcTemplate connectApsDb () {
        return connectDb(MySQL.apsDbUrl);
    }

    public JdbcTemplate connectPortalBaseCustDb () {
        return connectDb(MySQL.portalBaseCustDbUrl);
    }

    public JdbcTemplate connectDb (String dbUrl) {
        DriverManagerDataSource driverManagerDataSource;
        //因为JDBCTemplate是依赖数据库连接池的，所以先构造连接池
        driverManagerDataSource = new DriverManagerDataSource();
        driverManagerDataSource.setDriverClassName(MySQL.driverClassName);
        driverManagerDataSource.setUrl(dbUrl);
        driverManagerDataSource.setUsername(MySQL.dbUsername);
        driverManagerDataSource.setPassword(MySQL.dbPassword);

        JdbcTemplate  jdbcTemplate = new JdbcTemplate(driverManagerDataSource);
        return jdbcTemplate;
    }


}
