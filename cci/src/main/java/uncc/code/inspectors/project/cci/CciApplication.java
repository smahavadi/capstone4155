package uncc.code.inspectors.project.cci;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import org.bson.Document;
import com.mongodb.MongoClient;
import com.mongodb.MongoClientURI;
import com.mongodb.client.FindIterable;
import com.mongodb.client.MongoCollection;
import com.mongodb.client.MongoDatabase;
import org.bson.conversions.Bson;
import java.util.concurrent.TimeUnit;
import org.bson.Document;

/*
 * Requires the MongoDB Java Driver.
 * https://mongodb.github.io/mongo-java-driver
 */

Bson filter = new Document();

MongoClient mongoClient = new MongoClient(
    new MongoClientURI(
        "mongodb+srv://itcs4155:YG8LDwo4nWJZh7BG@cluster0.elkihwi.mongodb.net/test"
    )
);

MongoDatabase database = mongoClient.getDatabase("fci");
MongoCollection<Document> collection = database.getCollection("inspectors");
FindIterable<Document> result = collection.find(filter);

@SpringBootApplication
public class CciApplication {

	public static void main(String[] args) {
		SpringApplication.run(CciApplication.class, args);
	}

}
