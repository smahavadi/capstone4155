package uncc.code.inspectors.project.cci;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.mongodb.repository.config.EnableMongoRepositories;

// import org.bson.Document;
import com.mongodb.MongoClient;
import com.mongodb.MongoClientURI;
import com.mongodb.client.FindIterable;
import com.mongodb.client.MongoCollection;
import com.mongodb.client.MongoDatabase;
import org.bson.conversions.Bson;
// import java.util.concurrent.TimeUnit;
import org.bson.Document;

/*
 * Requires the MongoDB Java Driver.
 * https://mongodb.github.io/mongo-java-driver
 */

@SpringBootApplication
@EnableMongoRepositories
public class CciApplication {

	public static void main(String[] args) {
		SpringApplication.run(CciApplication.class, args);
	}



}
