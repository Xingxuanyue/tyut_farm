/**
 * Copyright (C), 2000-2025, XXX有限公司
 * FileName: MinioPublicBucketExample
 * Author: 22932
 * Date: 11/6/2025 16:18:51
 * Description:
 *
 * History:
 * <author> 作者姓名
 * <time> 修改时间
 * <version> 版本号
 * <desc> 版本描述
 */

import io.minio.MinioClient;
import io.minio.SetBucketPolicyArgs;
import io.minio.errors.MinioException;

import java.io.IOException;
import java.security.NoSuchAlgorithmException;

/**
 * @ClassName: MinioPublicBucketExample
 * @Description: java类描述
 * @Author: 22932
 * @Date: 11/6/2025 16:18:51
 */
public class MinioPublicBucketExample {
    public static void main(String[] args) throws Exception{

            // 初始化MinIO客户端
            MinioClient minioClient = MinioClient.builder()
                .endpoint("http://localhost:9000")
                .credentials("iyaovo", "123456789")
                .build();

            // 存储桶名称
            String bucketName = "picture";

            // 创建存储桶（如果不存在）
            boolean found = minioClient.bucketExists(
                io.minio.BucketExistsArgs.builder().bucket(bucketName).build());

            if (!found) {
                minioClient.makeBucket(
                    io.minio.MakeBucketArgs.builder().bucket(bucketName).build());
                System.out.println("创建存储桶: " + bucketName);
            } else {
                System.out.println("存储桶已存在: " + bucketName);
            }

            // 设置存储桶策略为公开可读
            String policy = "{\n" +
                "  \"Version\": \"2012-10-17\",\n" +
                "  \"Statement\": [{\n" +
                "    \"Effect\": \"Allow\",\n" +
                "    \"Principal\": {\"AWS\": [\"*\"]},\n" +
                "    \"Action\": [\"s3:GetObject\"],\n" +
                "    \"Resource\": [\"arn:aws:s3:::" + bucketName + "/*\"]\n" +
                "  }]\n" +
                "}";

            minioClient.setBucketPolicy(
                SetBucketPolicyArgs.builder()
                    .bucket(bucketName)
                    .config(policy)
                    .build());

            System.out.println("存储桶 " + bucketName + " 已设置为公开可读");

    }
}

