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

		// Bson filter = new Document();

		// MongoClient mongoClient = new MongoClient(
		// 	new MongoClientURI(
		// 		"mongodb+srv://itcs4155:YG8LDwo4nWJZh7BG@cluster0.elkihwi.mongodb.net/test"
		// 	)
		// );

		// // database info
		// /**
		//  *  spring.data.mongodb.username=itcs4155
		// 	spring.data.mongodb.password=YG8LDwo4nWJZh7BG
		// 	spring.data.mongodb.database=test
		// 	spring.data.mongodb.port=27017
		// 	spring.data.mongodb.host=cluster0.elkihwi.mongodb.net
		//  */

		// MongoDatabase database = mongoClient.getDatabase("fci");
		// MongoCollection<Document> collection = database.getCollection("inspectors");
		// FindIterable<Document> result = collection.find(filter);

}
